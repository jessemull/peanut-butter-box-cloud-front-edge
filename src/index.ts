export interface Request {
  uri: string
}

export interface Record {
  cf: {
    request: Request
  }
}

export interface Event {
  Records: Array<Record>
}

const hasExtension = /(.+)\.[a-zA-Z0-9]{2,5}$/

export const handler = (event: Event, context: unknown, callback: (unknown, Request) => void): void => {
  const request = event.Records[0].cf.request
  let uri = request.uri
  uri = uri.endsWith('/') && uri !== '/' ? uri.slice(0, -1) : uri
  if (uri && uri !== '/' && !uri.match(hasExtension)) {
    request.uri = `${uri}.html`
  }
  callback(null, request)
}
