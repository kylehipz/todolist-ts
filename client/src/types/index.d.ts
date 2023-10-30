interface User {
  name: string
  email: string
  picture: string
}

type Todo = import('zod').infer<typeof import('../models/todo')['todoSchema']>

// declare module 'vitest' {
//   interface CustomMatchers<R = unknown> {
//     toBeInTheDocument: () => R
//   }
//   interface Assertion<T = any> extends CustomMatchers<T> {}
//   interface AsymmetricMatchersContaining extends CustomMatchers {}
// }
