resource "random_id" "project_id" {
  byte_length = 2
}

locals {
  project_id   = "read-thai-${random_id.project_id.hex}"
  project_name = "Read-Thai"
  build_folder = "../dist"
  location     = "eu-west-3"
}
