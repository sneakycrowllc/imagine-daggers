package handler

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type NewUser struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func Handler(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	var newUserData NewUser
	err := decoder.Decode(&newUserData)
	if err != nil {
		fmt.Fprintf(w, "error")
	}
	w.Header().Set("Content-Type", "application/json")
	returnedData, err := json.Marshal(&newUserData)
	if err != nil {
		fmt.Fprintf(w, "error on returning json data")
	}
	w.Write(returnedData)
}
