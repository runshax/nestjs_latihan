import { ApplicationContext } from './app.context';
import { ValidationPipe } from './pipes/validation.pipe';
import { ConfigService } from './modules/config/config.service';

async function bootstrap() {
  const app = await ApplicationContext();
  app.useGlobalPipes(new ValidationPipe());
  // await app.listen(3000);
  await app.listen(app.get(ConfigService).getInt('APP_PORT'));
}
bootstrap();