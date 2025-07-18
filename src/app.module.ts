import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { GoogleModule } from "../google/google.module"
import { BrasilsegModule } from "../brasilseg/brasilseg.module"
import googleConfig from "../config/google.config"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [googleConfig],
    }),
    GoogleModule,
    BrasilsegModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
