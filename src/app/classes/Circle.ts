import { IDimension } from '../interfaces/IDimension';
import { IShape } from '../interfaces/IShape';
import { CircleDimensions } from './CircleDimensions';
import { Geometry } from './Geometry';
import { Point } from './Point';
import {Shape} from './Shape'


export class Circle extends Shape {

    constructor(id: number, center: Point){
        super("circle", id, center);
    }

    // draw(p: Point): void {
    //     throw new Error('Method not implemented.');
    // }
    // resize(newCenter: Point, newDimensions: Array<number>): void {
    //     throw new Error('Method not implemented.');
    // }
    copy(): IShape {
        throw new Error('Method not implemented.');
    }
    delete(): void {
        throw new Error('Method not implemented.');
    }
    resize(location: string, offset: Point, mouse: Point): void {
        let direction = (location == 'N' || location == 'W')? -1: 1;
        if(Math.abs(offset.x) > Math.abs(offset.y)){
            this.dimensions[0] += direction * offset.x;
        }else{
            this.dimensions[0] += direction * offset.y;
        }
        this.dimensions[0] = Math.abs(this.dimensions[0]);
        this.dimensions[1] = this.dimensions[0];
    }
}