document.addEventListener('DOMContentLoaded', function() {
          // Add more experience fields
          document.getElementById('add-experience').addEventListener('click', function() {
              const container = document.getElementById('experience-container');
              const entries = container.querySelectorAll('.experience-entry');
              const newIndex = entries.length + 1;
              
              const newEntry = document.createElement('div');
              newEntry.className = 'experience-entry';
              newEntry.innerHTML = `
                  <div class="form-group">
                      <label for="exp-title-${newIndex}">Job Title</label>
                      <input type="text" id="exp-title-${newIndex}" name="exp-title-${newIndex}">
                  </div>
                  <div class="form-group">
                      <label for="exp-company-${newIndex}">Company</label>
                      <input type="text" id="exp-company-${newIndex}" name="exp-company-${newIndex}">
                  </div>
                  <div class="form-group">
                      <label for="exp-duration-${newIndex}">Duration</label>
                      <input type="text" id="exp-duration-${newIndex}" name="exp-duration-${newIndex}" placeholder="e.g., Jan 2020 - Present">
                  </div>
                  <div class="form-group">
                      <label for="exp-description-${newIndex}">Description</label>
                      <textarea id="exp-description-${newIndex}" name="exp-description-${newIndex}" rows="3"></textarea>
                  </div>
              `;
              
              container.appendChild(newEntry);
          });
          
          // Add more reference fields
          document.getElementById('add-reference').addEventListener('click', function() {
              const container = document.getElementById('reference-container');
              const entries = container.querySelectorAll('.reference-entry');
              const newIndex = entries.length + 1;
              
              const newEntry = document.createElement('div');
              newEntry.className = 'reference-entry';
              newEntry.innerHTML = `
                  <div class="form-group">
                      <label for="ref-name-${newIndex}">Name</label>
                      <input type="text" id="ref-name-${newIndex}" name="ref-name-${newIndex}">
                  </div>
                  <div class="form-group">
                      <label for="ref-position-${newIndex}">Position</label>
                      <input type="text" id="ref-position-${newIndex}" name="ref-position-${newIndex}">
                  </div>
                  <div class="form-group">
                      <label for="ref-contact-${newIndex}">Contact Information</label>
                      <input type="text" id="ref-contact-${newIndex}" name="ref-contact-${newIndex}">
                  </div>
              `;
              
              container.appendChild(newEntry);
          });
          
          // Generate Resume
          document.getElementById('generateResume').addEventListener('click', function() {
              const name = document.getElementById('name').value;
              const phone = document.getElementById('phone').value;
              const email = document.getElementById('email').value;
              
              // Validate required fields
              if (!name || !phone || !email) {
                  alert('Please fill out all required fields (Name, Phone, Email)');
                  return;
              }
              
              // Education details
              const tenthSchool = document.getElementById('tenth-school').value;
              const tenthYear = document.getElementById('tenth-year').value;
              const tenthPercentage = document.getElementById('tenth-percentage').value;
              
              const twelfthSchool = document.getElementById('twelfth-school').value;
              const twelfthYear = document.getElementById('twelfth-year').value;
              const twelfthPercentage = document.getElementById('twelfth-percentage').value;
              
              const degreeType = document.getElementById('degree-type').value;
              const degreeInstitution = document.getElementById('degree-institution').value;
              const degreeYear = document.getElementById('degree-year').value;
              const degreePercentage = document.getElementById('degree-percentage').value;
              
              // Skills and hobbies
              const skills = document.getElementById('skills').value;
              const hobbies = document.getElementById('hobbies').value;
              const additionalSkills = document.getElementById('additional-skills').value;
              
              // Experience sections
              const experienceEntries = document.querySelectorAll('.experience-entry');
              let experienceHTML = '';
              
              experienceEntries.forEach((entry, index) => {
                  const title = document.getElementById(`exp-title-${index + 1}`).value;
                  const company = document.getElementById(`exp-company-${index + 1}`).value;
                  const duration = document.getElementById(`exp-duration-${index + 1}`).value;
                  const description = document.getElementById(`exp-description-${index + 1}`).value;
                  
                  if (title || company) {
                      experienceHTML += `
                          <div class="experience-item">
                              <h3>${title} at ${company}</h3>
                              <p class="duration">${duration}</p>
                              <p>${description}</p>
                          </div>
                      `;
                  }
              });
              
              // Reference sections
              const referenceEntries = document.querySelectorAll('.reference-entry');
              let referencesHTML = '';
              
              referenceEntries.forEach((entry, index) => {
                  const refName = document.getElementById(`ref-name-${index + 1}`).value;
                  const refPosition = document.getElementById(`ref-position-${index + 1}`).value;
                  const refContact = document.getElementById(`ref-contact-${index + 1}`).value;
                  
                  if (refName) {
                      referencesHTML += `
                          <div class="reference-item">
                              <p><strong>${refName}</strong> - ${refPosition}</p>
                              <p>Contact: ${refContact}</p>
                          </div>
                      `;
                  }
              });
              
              // Build skills and hobbies lists
              const skillsList = skills ? skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('') : '';
              const hobbiesList = hobbies ? hobbies.split(',').map(hobby => `<li>${hobby.trim()}</li>`).join('') : '';
              const additionalList = additionalSkills ? additionalSkills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('') : '';
              
              // Generate the resume HTML
              const resumeHTML = `
                  <div class="resume">
                      <div class="resume-header">
                          <h1>${name}</h1>
                          <p>Phone: ${phone} | Email: ${email}</p>
                      </div>
                      
                      <div class="resume-section">
                          <h2>Educational Details</h2>
                          <table class="education-table">
                              <thead>
                                  <tr>
                                      <th>Course/Level</th>
                                      <th>Institution</th>
                                      <th>Year of Passing</th>
                                      <th>Percentage/CGPA</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>10th Grade</td>
                                      <td>${tenthSchool}</td>
                                      <td>${tenthYear}</td>
                                      <td>${tenthPercentage}</td>
                                  </tr>
                                  <tr>
                                      <td>12th Grade/Intermediate</td>
                                      <td>${twelfthSchool}</td>
                                      <td>${twelfthYear}</td>
                                      <td>${twelfthPercentage}</td>
                                  </tr>
                                  <tr>
                                      <td>${degreeType}</td>
                                      <td>${degreeInstitution}</td>
                                      <td>${degreeYear}</td>
                                      <td>${degreePercentage}</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                      
                      <div class="resume-section">
                          <h2>Skills</h2>
                          <ul class="skills-list">
                              ${skillsList}
                          </ul>
                      </div>
                      
                      <div class="resume-section">
                          <h2>Hobbies</h2>
                          <ul class="hobbies-list">
                              ${hobbiesList}
                          </ul>
                      </div>
                      
                      <div class="resume-section">
                          <h2>Professional Experience</h2>
                          ${experienceHTML || '<p>No professional experience listed.</p>'}
                      </div>
                      
                      <div class="resume-section">
                          <h2>References</h2>
                          ${referencesHTML || '<p>No references provided.</p>'}
                      </div>
                      
                      <div class="resume-section">
                          <h2>Additional Skills & Languages</h2>
                          <ul class="additional-list">
                              ${additionalList}
                          </ul>
                      </div>
                  </div>
              `;
              
              // Update the preview
              document.getElementById('resumeContent').innerHTML = resumeHTML;
              document.getElementById('printResume').style.display = 'block';
          });
          
          // Print/Save resume
          document.getElementById('printResume').addEventListener('click', function() {
              window.print();
          });
      });
