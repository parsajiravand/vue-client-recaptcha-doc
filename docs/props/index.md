
| Name                  | Description                                                                    | Type       | Default          |
| --------------------  | ------------------------------------------------------------------------------ | --------   | ---------------- |
| value                 | Send the value with the component and check the entered value correctly        | `string`   | ``               |
| chars                 | Characters that captcha should be made with.                                   | `string`   | <b>A</b> to <b>Z</b> <b>a </b> to <b>z</b> <b>0</b> to <b>10</b>|                                                               
| count                 | Number of character                                                            | `number`   | `5`   |
| hideLines  | Hide dirty line and make captcha simple | `boolean`  | `false`   |
| customTextColor  | Set text color for all characters | `string`  | ``   |
| textColors  | Set random text color for each character in array of list | `string[]`  | ``   |
| width  | Width of captcha | `any`  | `count * 30`|
| height  | Width of captcha | `number`  | `50`|
| canvasClass  |  custom class for canvas | `string`  | ``|
| captchaFont <small>(V1.1.2)</small>  | Custom canvas font    | `string`  | `bold 28px sans-serif`|
                                                                           