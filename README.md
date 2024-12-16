# Chess Mania

Chess Mania is a real-time, multiplayer chess game built with Node.js, Express, and Socket.IO. It allows two players to compete against each other while spectators can observe the game.

---

## Features

- Real-time chess gameplay with proper chess rules.
- Dynamic assignment of player roles: White, Black, or Spectator.
- Chess board state synchronization across all clients.
- Move validation to ensure adherence to chess rules.
- Spectator mode for additional users.

---

## Technologies Used

- **Backend**:
  - Node.js
  - Express
  - Socket.IO
  - chess.js (for chess logic and rules)
- **Frontend**:
  - HTML
  - CSS
  - EJS (Embedded JavaScript templates)

---

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/chess-mania.git
   cd chess-mania
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Server**:

   ```bash
   node app.js
   ```

4. **Access the Application**:

   Open your browser and go to [http://localhost:3000](http://localhost:3000).

---

## How to Play

1. The first user to connect will play as **White**.
2. The second user to connect will play as **Black**.
3. Additional users will join as spectators.
4. Make moves by clicking on a piece and selecting its destination.
5. The game ensures all moves are valid based on chess rules.

---

## Folder Structure

```
chess-mania/
├── public/
│   ├── styles.css         # Static CSS file
├── views/
│   ├── index.ejs          # Frontend template
├── app.js                 # Main server file
├── package.json           # Project metadata and dependencies
```

---

## Acknowledgments

- [Chess.js](https://github.com/jhlywa/chess.js): Used for chess logic and validation.
- [Socket.IO](https://socket.io): Enabled real-time communication between clients and the server.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
