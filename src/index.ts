import dayjs from "dayjs";

class Person {
	private name: string;
	private age: number;
	
	public constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
	
	public call(): string {
		return this.name;
	}
	
	// 追加
	public tellBirthYear(): string {
		return dayjs().subtract(this.age, "year").format("YYYY");
	}
}

export { Person };
