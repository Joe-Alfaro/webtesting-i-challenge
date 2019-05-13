module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement === NaN || item.enhancement === undefined) {
    item.enhancement = 1;
  }
  else if(item.enhancement < 20) {
    item.enhancement += 1;
  }
  else if(item.enhancement > 20) {
    item.enhancement = 20;
  }
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  return { ...item };
}
