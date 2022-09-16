import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './assets/environments/environment';

/**
 * Đầu tiên sẽ kiểm tra mỗi trường đang sử dụng là gì?
 * environment lấy từ thư mục src.environments, hiện tại chỉ có môi trường production
 */
if (environment.production) {
  enableProdMode();
}

/**
 * Angular is a modular framework
 * Nghĩa là: Tất cả mọi thứ trong angular đều là module
 */
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
