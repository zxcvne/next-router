// type student = {
//   name: string;
//   age: number;
//   addr: string;
//   phone: string;
// };

interface student {
  name: string;
  age: number;
  addr: string;
  phone: string;
}

// type과 interface의 차이 : 여러개의 값의 타입을 교차해서 설정 가능

type stdProps = {
  std: student;
};

export default function Student({ std }: stdProps) {
  return (
    <div className="flex items-center justify-center m-2">
      <b className="font-bold">
        {std.name} ({std.age})
      </b>
      /{std.phone}/ ({std.addr})
    </div>
  );
}
