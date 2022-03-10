import { CatController } from './cat.controller';
import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/config/database.module";
import { catProviders } from "./cat.provider";
import { CatsService } from "./cat.service";

@Module({
    imports: [DatabaseModule],
    controllers: [CatController],
    providers: [
        CatsService,
        ...catProviders,
    ],
})
export class CatsModule { }