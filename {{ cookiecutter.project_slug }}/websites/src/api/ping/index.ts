import request from "@/utils/request.ts"

export default function ping() {
  return request({
    url: "/api/v1/drfadmin/ping/",
    method: "get"
  })
}