/**
 * 上游性能 bug 的运行时修补（blinko-space/blinko#1222，PR #1255 至今未合并）
 *
 * app/src/components/Common/LoadingAndEmpty.tsx 在 isLoading=false 时并不卸载 loader，
 * 只是把它压成 `h-0`；里面的 SMIL <animate repeatCount="indefinite"> 仍在跑，
 * 于是每一帧都要重算样式和 layout —— 空载就吃掉 20%~60% 的 CPU 核，
 * 表现为「点什么都慢、切页卡」。
 *
 * 这里只做一件事：把 `svg.h-0` 的动画暂停；当它重新变成可见（不再有 h-0）时恢复。
 */

const paused = new Set<SVGSVGElement>();

export function syncIdleAnimations(): void {
  // 只在需要暂停时做一次廉价查询，避免每次全量扫 svg
  const idle = document.querySelectorAll<SVGSVGElement>('svg.h-0');
  for (const svg of Array.from(idle)) {
    if (paused.has(svg)) continue;
    if (typeof svg.pauseAnimations !== 'function') continue;
    try {
      svg.pauseAnimations();
      paused.add(svg);
    } catch {
      /* ignore */
    }
  }

  // 恢复那些已经重新可见的
  for (const svg of Array.from(paused)) {
    if (!svg.isConnected) {
      paused.delete(svg);
      continue;
    }
    if (!svg.classList.contains('h-0')) {
      try {
        svg.unpauseAnimations();
      } catch {
        /* ignore */
      }
      paused.delete(svg);
    }
  }
}

export function resetIdleAnimations(): void {
  for (const svg of Array.from(paused)) {
    try {
      svg.unpauseAnimations();
    } catch {
      /* ignore */
    }
  }
  paused.clear();
}
