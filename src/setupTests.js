// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { server } from "./mocks/server";

// 테스트 시작 전 서버 listen
beforeAll(() => server.listen());

// 테스트 중 핸들러 리셋 -> 다른 테스트 영역에 가지 않도록
afterEach(() => server.resetHandlers());

// 테스트 종료 후 서버 클린업
afterAll(() => server.close());
