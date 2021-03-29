import {
  event,
  CommandClient,
  command,
  CommandContext,
  GatewayIntents
} from 'https://deno.land/x/harmony/mod.ts'

class MyClient extends CommandClient {
  constructor() {
    super({
      prefix: ['!', '!!'],
      caseSensitive: false
    })
  }

  @event()
  ready(): void {
    console.log(`Logged in as ${this.user?.tag}!`)
  }

  @command({ aliases: 'pong' })
  Ping(ctx: CommandContext): void {
    ctx.message.reply('Pong!')
  }
}

new MyClient().connect(process.env.BOT_TOKEN, [
  GatewayIntents.DIRECT_MESSAGES,
  GatewayIntents.GUILDS,
  GatewayIntents.GUILD_MESSAGES
])