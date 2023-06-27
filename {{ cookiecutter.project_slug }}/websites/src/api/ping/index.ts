import request from "@/utils/request.ts"

export default function ping() {
  return request({
    url: "/api/v1/{{ cookiecutter.project_slug }}/ping/",
    method: "get"
  })
}