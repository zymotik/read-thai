terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = ">= 4.49.0, < 5"
    }

    google-beta = {
      source  = "hashicorp/google-beta"
      version = ">= 4.49.0, < 5"
    }
  }

  backend "gcs" {
    bucket = "zymotik-infra-terraform-state"
    prefix = "read-thai/"
  }
}

provider "google" {
}

provider "google-beta" {
}
