import type { NextApiRequest, NextApiResponse } from 'next'
import { Application, Container, Graphics } from '@pixi/node'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const app = new Application()
  const container = new Container()
  app.stage.addChild(container)
  const g = new Graphics().beginFill(0xffffff).drawRect(0, 0, 200, 200).endFill()
  container.addChild(g)

  const canvas = app.renderer.plugins.extract.canvas(container)
  const buf = canvas.toBuffer('image/png')
  res.setHeader('Content-Type', 'image/png')
  res.setHeader('Content-Length', buf.length)
  res.status(200).end(buf, 'binary')
}
