# React Sheet Presentation

React sheet presentation UI for the web. This is inspired by SwiftUI's `Sheet`.

# Example

# Usage

## Wrap your component into `Sheet`

```tsx
import React, { FC } from 'react'
import Sheet, { useSheetState } from 'react-sheet'

const [show, setShow] = useSheetState(false)

<Sheet isActive={show} setIsActive={setShow}>
    <YourCustomPageComponent />
</Sheet>
```

## Declare wrapped component like this

```tsx
import React, { FC } from 'react'
import { SheetPageProps } from 'react-sheet-presentation'

interface MyCustomComponentProps extends Partial<SheetPageProps> { }

const MyCustomComponent: FC<MyCustomComponentProps> = ({
    dismiss
}) => {
    return <div>
        <button onClick={dismiss!}>Dismiss</button>
    </div>
}
```

## Install

Install with `npm`.

```sh
npm i react-sheet-presentation
```

## Author

React Sheet Presentation is authored by Victor Teo.

## License

MIT License

Copyright (c) 2021 Fillmula Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
