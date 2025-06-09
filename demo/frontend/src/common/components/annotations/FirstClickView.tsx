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
import ChangeVideoModal from '@/common/components/video/ChangeVideoModal';
import useMessagesSnackbar from '@/common/components/snackbar/useDemoMessagesSnackbar';
import {useEffect, useRef} from 'react';

export default function FirstClickView() {
  const isFirstClickMessageShown = useRef(false);
  const {enqueueMessage} = useMessagesSnackbar();

  useEffect(() => {
    if (!isFirstClickMessageShown.current) {
      isFirstClickMessageShown.current = true;
      enqueueMessage('firstClick');
    }
  }, [enqueueMessage]);

  return (
    <div className="w-full h-full flex flex-col p-8">
      <div className="flex-grow flex flex-col items-center justify-center gap-6 text-center p-8">
        <h2 className="text-2xl">Click a football player to start tracking</h2>
        <div className="text-base text-[#65758B] max-w-md leading-relaxed">
          Select and track football players throughout the game footage using advanced AI technology.
        </div>
        <div className="text-sm text-[#65758B] max-w-md">
          To start, click any player in the video.
        </div>
      </div>
      <div className="flex items-center">
        <ChangeVideoModal />
      </div>
    </div>
  );
}
