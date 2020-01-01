let a:boolean = true;

let b:number = 1;

let c:string = 'foo';

function Hoge (a: boolean, b: number): boolean {
    return a;
}

// Array
let hairetu: number[] = [1, 2, 3];

// Object

interface Foo {
    a: string,
    b: number | null
}

let mix: Foo = {a: 'foo', b: null}

console.log(mix);
