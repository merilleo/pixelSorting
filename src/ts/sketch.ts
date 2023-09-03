import p5 from 'p5';

class Sketch {
    c: p5;

    constructor (w: number, h: number, id: string) {
        this.c = new p5(()=>{});
    }

    delete(): void {
        this.c.remove();
    }
    create( width: number, height: number, id: string): void {
        this.c = new p5( (p)=>{
            p.setup = () => {
                p.createCanvas(width, height);
                p.background(255);
            }
            p.draw = () => {

            }
        }, id);
    }
}

export default Sketch;