function sub() {
  let a = a_value();
  let b = b_value();
  return a + b;
}

function a_value() {
  let a = 800;
  return a;
}

function b_value() {
  let b = 50;
  return b;
}

console.log(sub());
