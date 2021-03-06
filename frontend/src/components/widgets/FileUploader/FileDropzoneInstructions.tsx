/**
 * @license
 * Copyright 2018-2020 Streamlit Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react"
import { MaterialIcon } from "components/shared/Icon"
import { FileSizes, getSizeDisplay } from "lib/FileHelper"
import { Small } from "components/shared/TextElements"
import { Sizes } from "lib/widgetTheme"

import {
  StyledFileDropzoneInstructions,
  StyledFileDropzoneInstructionsFileUploaderIcon,
  StyledFileDropzoneInstructionsStyledSpan,
  StyledFileDropzoneInstructionsColumn,
} from "./styled-components"

export interface Props {
  multiple: boolean
  acceptedExtensions: string[]
  maxSizeBytes: number
}

const FileDropzoneInstructions = ({
  multiple,
  acceptedExtensions,
  maxSizeBytes,
}: Props): React.ReactElement => (
  <StyledFileDropzoneInstructions>
    <StyledFileDropzoneInstructionsFileUploaderIcon>
      <MaterialIcon
        icon="cloud_upload"
        type="outlined"
        size={Sizes.LARGE}
        className="fileUploaderIcon"
      />
    </StyledFileDropzoneInstructionsFileUploaderIcon>
    <StyledFileDropzoneInstructionsColumn>
      <StyledFileDropzoneInstructionsStyledSpan>
        Drag and drop file{multiple ? "s" : ""} here
      </StyledFileDropzoneInstructionsStyledSpan>
      <Small>
        {`Limit ${getSizeDisplay(maxSizeBytes, FileSizes.Byte, 0)} per file`}
        {acceptedExtensions.length
          ? ` • ${acceptedExtensions
              .join(", ")
              .replace(/\./g, "")
              .toUpperCase()}`
          : null}
      </Small>
    </StyledFileDropzoneInstructionsColumn>
  </StyledFileDropzoneInstructions>
)

export default FileDropzoneInstructions
