console.log('module...');
// 导出一：
// export const a = 1;

// 导出二：
// const a = 1;
// const b = 2;
// export {a,b};

// 导出三：
// export {a as a1,b as b1};

// 导出四：
// 1. const a = 'a';
// export default a;

// 2.export default 123;

// 导出五：
// const a = 123;
// const b = 456;
// export {a}
// export default b;
// 一个模块只能有一个默认导出,export default命令只能用一次