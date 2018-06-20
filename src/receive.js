import amqp from 'amqplib'

amqp.connect(
  'amqp://localhost',
  function(err, conn) {
    conn.createChannel(function(err, ch) {
      const q = 'hello'

      ch.assertQueue(q, { durable: false })
      console.log(' [*] Waiting for messages in %s. To exit press CTRL+C', q)
      ch.consume(
        q,
        function(msg) {
          console.log(' [x] Received %s', msg.content.toString())
        },
        { noAck: true }
      )
    })
  }
)
