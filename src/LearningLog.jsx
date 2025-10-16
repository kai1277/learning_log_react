import { useState } from "react";

export const LearningLog = () => {
  const [learningLogText, setLearningLogText] = useState("");
  const [learningLogs, setLearningLogs] = useState([]);
  const [learningHoursText, setLearningHoursText] = useState("");
  const [learningHours, setLearningHours] = useState([]);

  const onChangeLearningLogText = (event) =>
    setLearningLogText(event.target.value);

  const onChangeLearningHoursText = (event) =>
    setLearningHoursText(event.target.value);

  const onClickAdd = () => {
    const hours = Number(learningHoursText);
    const newLearningLogs = [...learningLogs, learningLogText];
    const newLearningHours = [...learningHours, hours];
    setLearningLogs(newLearningLogs);
    setLearningHours(newLearningHours);
    setLearningLogText("");
    setLearningHoursText("");
  };

  const totalHours = learningHours.reduce((sum, h) => sum + h, 0);

  return (
    <div>
      <div>
        <label>
          学習内容
          <input
            placeholder=""
            value={learningLogText}
            onChange={onChangeLearningLogText}
          />
        </label>
      </div>
      <div>
        <label>
          学習時間
          <input
            placeholder=""
            value={learningHoursText}
            onChange={onChangeLearningHoursText}
          />
        </label>
      </div>
      <div>
        <p>入力されている学習内容：{learningLogText}</p>
      </div>
      <div>
        <p>入力されている学習時間：{learningHoursText}</p>
      </div>
      <button onClick={onClickAdd}>登録</button>
      <p>入力されていな項目があります</p>
      <div>
        <p>合計時間：{totalHours}/1000時間</p>
      </div>
    </div>
  );
};
