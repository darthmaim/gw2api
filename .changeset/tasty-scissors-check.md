---
"@gw2api/fetch": minor
---

Catch more invalid responses from the Guild Wars 2 API:
- Make sure the response is JSON
- Include `text` in thrown error if the error is a valid error response
- Catch `["v1", "v2"]` error
