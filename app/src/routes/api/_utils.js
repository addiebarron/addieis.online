// Nice helper function for processing form data into SK endpoints via Dana Woodman:
// https://dev.to/danawoodman/getting-form-body-data-in-your-sveltekit-endpoints-4a85
export function getFormBody(body) {
  return [...body.entries()].reduce((data, [k, v]) => {
    let value = v;
    if (["true", "on", "checked"].includes(value)) value = true;
    if (["false", "off", "unchecked"].includes(value)) value = false;
    if (k in data)
      data[k] = Array.isArray(data[k]) ? [...data[k], value] : [data[k], value];
    else data[k] = value;
    return data;
  }, {});
}

// Generic server error
export function serverError(err) {
  console.log(err);
  return { status: 500, body: JSON.stringify({ message: err }) };
}

// export async function makeDirIfNone(path) {
//   try {
//     await access(path);
//     return false;
//   } catch {
//     await mkdir(path);
//     return true;
//   }
// }

// export async function removeDirIfExists(path) {
//   try {
//     await access(path);
//     await rmdir(path, { recursive: true });
//     return true;
//   } catch {
//     return false;
//   }
// }
