/* eslint-disable no-use-before-define */
import momen from 'moment';
import User from '../../data/user';
import API from '../../globals/api-endpoint';

const toast = document.querySelector('app-toast');

async function editProfile() {
  let form = document.querySelector('form#profile-form');
  const picture = document.querySelector('picture');
  const { name, username } = (await User.infoProfile()).data.user;

  picture.innerHTML = `
  <label for="dropzone-file">
    <img src="${API.IMAGE_PROFILE(username)}" alt="profile picture">
    <input id="dropzone-file" type="file" name="image" accept="image/*" style="display: none">
    <p><small>(click image to change)</small></p>
  </label>`;
  form.innerHTML = `
    <label for="name">Name</label>
    <input class="inputSignUp" id="name" type="text" name="name" value="${name}" autofocus required>
    <div class="action">
      <button type="submit" id="save">Save</button>
      <button type="button" id="cancel">Cancel</button>
    </div>`;
  form = document.querySelector('form#profile-form');
  const imageInput = document.querySelector('input#dropzone-file');
  imageInput.addEventListener('change', () => {
    const [file] = imageInput.files;
    if (file) {
      const img = document.querySelector('label[for="dropzone-file"] img');
      img.src = URL.createObjectURL(file);
    }
  });
  form.onsubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', form.elements.name.value);
      if (imageInput.files.length > 0) {
        formData.append('photo', imageInput.files[0]);
      }
      const { error, message } = await User.changeProfile(formData);
      if (error) return toast.danger(message);
      toast.success('Berhasil mengubah profil');
      profile();
    } catch (er) {
      console.log(er);
      toast.danger('Fetch failed');
    }
  };
  document.getElementById('cancel').onclick = (e) => {
    e.stopPropagation();
    profile();
  };
}

function changePassword() {
  let form = document.querySelector('form#profile-form');
  form.innerHTML = `
    <label for="oldPassword">Password</label>
    <input class="inputSignUp" id="oldPassword" type="password" name="oldPassword" autofocus required>
    <label for="newPassword">New Password</label>
    <input class="inputSignUp" id="newPassword" type="password" name="newPassword" autofocus required>
    <div class="action">
      <button type="submit" id="save">Save</button>
      <button type="button" id="cancel">Cancel</button>
    </div>`;
  form = document.querySelector('form#profile-form');
  form.onsubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = Object.fromEntries(new FormData(form).entries());
      const { message, error } = await User.changePassword(formData);
      if (error) return toast.danger(message);
      toast.success('Berhasil mengubah password');
      profile();
    } catch {
      toast.danger('Fetch failed');
    }
  };
  document.getElementById('cancel').onclick = (e) => {
    e.stopPropagation();
    profile();
  };
}

async function profile() {
  const form = document.querySelector('form#profile-form');
  const picture = document.querySelector('picture');

  const {
    name, username, email, registeredAt,
  } = (await User.infoProfile()).data.user;

  picture.innerHTML = `<img src="${API.IMAGE_PROFILE(username)}" alt="profile picture">`;

  form.innerHTML = `
    <label for="name">Name</label>
    <input class="inputSignUp" id="name" type="text" name="name" value="${name}" disabled>
    <label for="username">Username</label>
    <input class="inputSignUp" id="username" type="text" name="username" value="${username}" disabled>
    <label for="email">Email</label>
    <input class="inputSignUp" id="email" type="email" name="email" value="${email}" required disabled>
    <label for="registeredAt">Registered At</label>
    <input class="inputSignUp" id="registeredAt" type="text" name="registeredAt" value="${momen(registeredAt).locale('id').format('DD MMMM YYYY')}" required disabled>
    <div class="action">
      <button type="button" id="edit-profile">Edit Profile</button>
      <button type="button" id="change-password">Change Password</button>
    </div>`;

  document.getElementById('edit-profile').onclick = (e) => {
    e.stopPropagation();
    editProfile();
  };
  document.getElementById('change-password').onclick = (e) => {
    e.stopPropagation();
    changePassword();
  };
}

const Profile = {
  async render() {
    return `
    <div class="profile container">
      <h2>Profile</h2>
      <hr>
      <div class="grid">
        <picture>
          <img src="banjir.jpg" alt="profile picture">
        </picture>
        <form id="profile-form"></form>
      </div>
    </div>
    `;
  },
  async afterRender() {
    profile();
  },
};

export default Profile;
