# 널널 (NULLNULL) — 프론트엔드

> 붐비는 곳을 피해 여유 있는 공간을 찾아주는 캠퍼스 혼잡도 서비스

## 서비스 개요

수업 종료 직후 엘리베이터와 주요 동선에 인원이 집중된다.
학생은 얼마나 붐비는지 미리 알 수 없고, 학교는 동선 혼잡에 대한 데이터를 가지고 있지 않다.

BLE 광고 패킷을 수신해 지점별 밀집도를 측정하고, 혼잡 단계로 환산해 시각화한다.
학생은 붐비는 곳을 피할 수 있고, 누적 데이터는 캠퍼스 동선 개선의 근거가 된다.

## 관련 저장소

| 저장소 | 내용 |
|---|---|
| [nullnull-backend](https://github.com/NullNull-team/nullnull-backend) | 백엔드 |

## 문서

기획 문서와 회의록은 Notion 에서 관리한다.

| 문서 | 링크 |
|---|---|
| 프로젝트 메인 | [바로가기](https://app.notion.com/p/3db0379161a0805db549f231b1fe42ac) |
| 기능명세서 | [바로가기](https://app.notion.com/p/2f50379161a083b0bc0b81c20a74ba7c) |
| 화면설계서 | [바로가기](https://app.notion.com/p/9c80379161a0826bad3201d64301fcbf) |
| Git 컨벤션 | [바로가기](https://app.notion.com/p/Git-3dc0379161a080129c74d524d6aeca43) |
| 코드 컨벤션 | [바로가기](https://app.notion.com/p/3dc0379161a080bba44bf87adac88ac0) |
| 환경 변수 | [바로가기](https://app.notion.com/p/env-3dc0379161a08089bb0acc5ed0706990) |

## 기술 스택

| 항목 | 내용 |
|---|---|
| 프레임워크 | 미정 |
| 상태 관리 | 미정 |
| 스타일 | 미정 |
| 배포 | 미정 |

## 시작하기

```bash
git clone https://github.com/NullNull-team/nullnull-frontend.git
cd nullnull-frontend
# 스택 확정 후 작성
```

## 환경 변수

`.env.example` 을 복사해 `.env` 로 사용한다. `.env` 는 커밋하지 않는다.

```bash
cp .env.example .env
```

값은 Notion 의 [환경 변수](https://app.notion.com/p/env-3dc0379161a08089bb0acc5ed0706990) 문서를 참고한다.

## 담당 기능

| 기능 | 순위 | 상태 |
|---|---|---|
| 실시간 혼잡도 시각화 | 1 | 예정 |
| 여유 공간 추천 | 1 | 예정 |
| 동선 추천 | 3 | 예정 |
| 계단 / 엘리베이터 비교 | 3 | 예정 |

상세 정의는 [기능명세서](https://app.notion.com/p/2f50379161a083b0bc0b81c20a74ba7c)를 따른다.

## 작업 규칙

| 브랜치 | 용도 |
|---|---|
| `main` | 배포 가능한 상태만. 직접 푸시 금지 |
| `develop` | 통합 브랜치 |
| `feat/*` | 기능 개발 |
| `fix/*` | 버그 수정 |

```bash
git checkout develop
git pull origin develop
git checkout -b feat/기능이름
```

작업 후 `develop` 으로 PR 을 보내고 리뷰어 1명 이상 승인을 받는다.
상세 규칙은 [Git 컨벤션](https://app.notion.com/p/Git-3dc0379161a080129c74d524d6aeca43)을 따른다.

## API 변경 시

프론트와 백엔드가 저장소로 나뉘어 있어 변경 사항이 자동으로 공유되지 않는다.
API 관련 요청이나 변경은 [API 명세서](https://app.notion.com/p/API-3dc0379161a080f4af45f0a0453a8ba4)를 먼저 확인하고 팀 채널에 공유한다.

## 팀

| 이름 | GitHub |
|---|---|
| | |
| | |
| | |
