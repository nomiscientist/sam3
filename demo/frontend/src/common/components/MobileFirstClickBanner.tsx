/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {Upload} from '@carbon/icons-react';

export default function MobileFirstClickBanner() {
  return (
    <div className="flex w-fit p-4 gap-x-3 items-center bg-gradient-to-r from-[#4338CA] to-[#7C3AED] rounded-2xl">
      <div className="p-4 bg-white bg-opacity-20 rounded-lg">
        <Upload color="white" size={32} />
      </div>
      <div className="max-w-xs text-white font-light">
        <h2 className="font-semibold text-[16px] leading-6">
          Click a football player to start tracking
        </h2>
        <p className="text-sm leading-5 max-w-72">
          Select and track football players throughout the game. Click on any
          player to begin tracking their movement.
        </p>
      </div>
    </div>
  );
}
