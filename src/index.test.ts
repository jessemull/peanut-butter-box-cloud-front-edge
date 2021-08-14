import { handler } from './index'

describe('proxy', () => {
  it('should add html to uri', () => {
    const event = {
      Records: [{
        cf: {
          request: {
            uri: '/route'
          }
        }
      }]
    }
    const response = handler(event)
    expect(response).toEqual({ uri: '/route.html' })
  })
  it('should not add html if extension already exists', () => {
    const event = {
      Records: [{
        cf: {
          request: {
            uri: '/image.jpg'
          }
        }
      }]
    }
    const response = handler(event)
    expect(response).toEqual({ uri: '/image.jpg' })
  })
})
