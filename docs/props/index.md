
| Name                  | Description                                                                    | Type       | Default          |
| --------------------  | ------------------------------------------------------------------------------ | --------   | ---------------- |
| value                 | send the value with the component and check the entered value correctly        | `string`   | ``               |
| chars                 | characters that captcha should be made with.                                   | `string`   | <b>A</b> to <b>Z</b> <b>a </b> to <b>z</b> <b>0</b> to <b>10</b>|                                                               
| count                 | number of character                                                            | `number`   | `5`   |
| hideLines  | hide dirty line and make captcha simple | `boolean`  | `false`   |
| customTextColor  | set text color for all characters | `string`  | ``   |
| textColors  | set random text color for each character in array of list | `string[]`  | ``   |
| width  | width of captcha | `any`  | `count * 30`|
| height  | width of captcha | `number`  | `50`|
| canvasClass  | can set custom class for canvas | `string`  | ``|
                                                                           