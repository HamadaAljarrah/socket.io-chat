import openSocket from "socket.io-client";
export const SERVER_URL = "http://192.168.0.104:8080"
export const socket = openSocket(SERVER_URL)


