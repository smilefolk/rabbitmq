import amqp from 'amqplib'

amqp.connect(
  'amqp://localhost',
  function(err, conn) {
    conn.createChannel(function(err, ch) {
      const q = 'hello'

      ch.assertQueue(q, { durable: false })
      ch.sendToQueue(q, new Buffer('Hello World'))
      console.log('[x] Sent Hello World!')
    })
    setTimeout(function() {
      conn.close()
      process.exit(0)
    }, 500)
  }
)
