// export a function
module.exports = function(io) {
	// collaboration sessions
	// record all the participants in each session
	// so that server can send changes to all participants in a session
	var collaborations = {};

	// map from socketId to sessionId
	var socketIdToSessionId = {};

	// when 'connection' event happends
	io.on('connection', (socket) => {
		// get sessionId
		let sessionId = socket.handshake.query['sessionId'];

		socketIdToSessionId[socket.id] = sessionId;
		// if sessionId is not in collaborations, it means no one
		// does this problem before
		// add current socket id to collaboration session participants
		if (!(sessionId in collaborations)) {
			collaborations[sessionId] = {
				'participants' : []
			};
		}

		collaborations[sessionId]['participants'].push(socket.id);

		// socket event listeners
		// delta is the change info
		// it records the row and column of the changes
		socket.on('change', delta => {
			// log, easy for debuging
			console.log("change " + socketIdToSessionId[socket.id] + ': ' + delta);
			// get sesssion id based on socket.id
			let sessionId = socketIdToSessionId[socket.id];
			if (sessionId in collaborations) {
				// get all participants in this session
				let participants = collaborations[sessionId]['participants'];
				// send changes to all participants
				for (let i = 0; i < participants.length; i++) {
					// skip the one who created this
					if (socket.id != participants[i]) {
						io.to(participants[i]).emit("change", delta);
					} 
				}
			} else {
				console.log('warning: could not find socket id in collaborations');
			}
		});

		// console.log(socket);
		// // get message
		// var message = socket.handshake.query['message'];
		// console.log(message);
		// // reply to socket.id, emit 'message' event so that
		// // client side can get the message
		// io.to(socket.id).emit('message', 'hehe from server');
	});
}