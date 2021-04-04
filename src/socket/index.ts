import { io, Socket, SocketOptions } from 'socket.io-client'

interface data {
  appUname: string;
  userId: string;
  userToken: string;
}

interface guestdata {
  guestId: string;
  message: string;
}

export class _Socket {
  private _data: data | undefined
  public socket_host: Socket | undefined
  public socket

  constructor (socket: any) {
    this.socket = socket
  }

  public init (data: data): void {
    this._data = data
    this.socket_host = io(
      `http://localhost:3456/${this._data.appUname}/${this._data.userId}`,
      { extraHeaders: { Authorization: `Bearer ${this._data.userToken}` } }
    )
  }

  public async get_messages(): Promise<any> {
    console.log('hii')
    this.socket_host?.emit('request_txtmsg', '')
    this.socket_host?.once('txmsgs', (msgs: any) => {
      Promise.resolve(msgs)
    })
  }

  public async get_messages_with_guest(guestId: string): Promise<any> {
    const socket_guest = io(
      `http://localhost:3456/${this._data?.appUname}/${guestId}`,
      { extraHeaders: { Authorization: `Bearer ${this._data?.userToken}` } }
    )
    socket_guest.emit('request_txtmsg', { guestId })
    socket_guest.once('txtmsgs', (msgs: any) => {
      Promise.resolve(msgs)
    })
  }

  public send_message(guestdata: guestdata): void {
    const socket_guest = io(
      `http://localhost:3456/${this._data?.appUname}/${guestdata.guestId}`,
      { extraHeaders: { Authorization: `Bearer ${this._data?.userToken}` } }
    )
    socket_guest.emit('send_txtmsg', guestdata.message)
  }
}