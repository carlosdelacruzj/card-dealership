import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/car.seed';
import { BrandsService } from 'src/brands/brands.service';
import { BRAND_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly CarsService: CarsService,
    private readonly BrandsService: BrandsService,
  ) {}
  populateDB() {
    this.CarsService.fillCarsWithSeedData(CARS_SEED);
    this.BrandsService.fillCarsWithSeedData(BRAND_SEED);
    return 'Seed Executed';
  }
}
