
declare class Seed {
	next(): number;
}

declare class Key {
	long(): string;
	number(): string;
	plain(): Seed;
	random(p: {length?: number, char?: string}): string;
	seed(p: number): Seed;
	short(): string;
	simple(size: number): string;
}

declare const _default: Key;
export default _default;
