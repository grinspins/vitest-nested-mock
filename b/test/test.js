import {vi} from "vitest"
import {requestor} from "../src/index"

vi.mock("axios", () => ({
  default: {
    get: vi.fn(() => console.log("MOCKED!"))
  },
}))


it("mocks the dep", async () => {
  await requestor()
})
