const express = require('express')
const socket = require('socket.io')
const { Chess } = require('chess.js')
const http = require('http')
const path = require('path')

const app = express()
const server = http.createServer(app)
const io = socket(server)

const chess = new Chess()
let players = {}
let currentplayer = "w"

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
    res.render('index', { title: 'Chess Mania' })
})

io.on("connection", (socket) => {
    console.log("connected:", socket.id)

    if (!players.white) {
        players.white = socket.id
        socket.emit('playerRole', "w")
    } else if (!players.black) {
        players.black = socket.id
        socket.emit('playerRole', "b")
    } else {
        socket.emit("playerRole", "spectator") // Ensure consistent emit message
    }

    socket.on('disconnect', () => {
        if (socket.id === players.white) {
            delete players.white
            console.log("White player disconnected")
        } else if (socket.id === players.black) {
            delete players.black
            console.log("Black player disconnected")
        }
    })

    socket.on('move', (move) => {
        try {
            // Check turn and player
            if (chess.turn() === 'w' && socket.id !== players.white) {
                socket.emit("error", "Not your turn (White)")
                return
            }
            if (chess.turn() === 'b' && socket.id !== players.black) {
                socket.emit("error", "Not your turn (Black)")
                return
            }

            // Attempt the move
            const result = chess.move(move)
            if (result) {
                currentplayer = chess.turn() // Update the turn
                io.emit("move", move) // Broadcast the move
                io.emit('boardState', chess.fen()) // Broadcast updated board state
            } else {
                console.log("Invalid Move: ", move)
                socket.emit("error", "Invalid move")
            }
        } catch (error) {
            console.log("Error processing move:", error)
            socket.emit("error", "An error occurred")
        }
    })
})

server.listen(3000, () => {
    console.log('listening on PORT 3000')
})
