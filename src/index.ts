const hasExtension = /(.+)\.[a-zA-Z0-9]{2,5}$/

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

export const handler = (event: Event): Request => {
  const request = event.Records[0].cf.request
  const url = request.uri
  if (url && !url.match(hasExtension)) {
    request.uri = `${url}.html`
  }
  return request
}
