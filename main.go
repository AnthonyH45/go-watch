package main

import (
	"log"
	"net/http"
)

func main() {
	// http.HandleFunc("/ws", backend.WSEndpoint)
	// http.HandleFunc("/endpoint", backend.RecvData)
	// http.HandleFunc("/recvListeningPorts", backend.RecvListeningPorts)
	http.Handle("/", http.FileServer(http.Dir("./backend/static")))

	// go backend.CleanupClients()

	log.Fatal(http.ListenAndServe("localhost:8080", nil))
}
