export {};

declare global {
  interface Window {
    /** Blinko 注入的宿主 API（版本间字段可能不同，这里按需取用） */
    Blinko: any;
  }
}
