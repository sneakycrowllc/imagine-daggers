workflow "Build and deploy on push" {
  on = "push"
  resolves = ["GitHub Action for Google Cloud SDK auth"]
}

action "GitHub Action for npm" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}

action "GitHub Action for Google Cloud SDK auth" {
  uses = "actions/gcloud/auth@dc2b6c3bc6efde1869a9d4c21fcad5c125d19b81"
  needs = ["GitHub Action for npm"]
  secrets = ["GCLOUD_AUTH"]
}
