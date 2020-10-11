// import "../../../styles/page/eager-load/page.scss";
//
// class Something {
//     constructor(private testField: string, public testCode: string) {
//     }
//
//     get testFieldValue() {
//         return this.testField;
//     }
//
//     set testFieldValue(value: string) {
//         this.testField = value;
//     }
//
//     public doSomething() {
//         console.log("here's the result: ", this.testFieldValue, this.testCode);
//     }
// }
//
// const somethingTest = new Something("this is going to be the test field", "SDFCXV234");
//
// somethingTest.doSomething();
//
// export const processor = (param1: string, param2: number) => {
//     console.log("the processor's result: ", param1, param2);
// };
//
// setTimeout(async () => {
//     await import(/* webpackChunkName: "page-lazy" */ '../lazy-load/page');
// }, 5000)
