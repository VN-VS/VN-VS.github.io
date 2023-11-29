const env = process.env.NODE_ENV
const baseUrl = {}

if (env === 'production') {
    baseUrl.rootPath = 'http://test.com'
} else {
    baseUrl.rootPath = 'http://localhost:7001'
}

export { baseUrl }

export const classNames = 'TDD-header'
