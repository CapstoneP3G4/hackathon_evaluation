//package com.fullstackbackend.service;
//
//import java.util.Collection;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//
//import com.fullstackbackend.model.User;
//
//public class CustomUserDetails implements UserDetails {
//
//	private static final long serialVersionUID = 1L;
//	private User user;
//    
//    public CustomUserDetails(User user2) {
//        this.user = user2;
//    }
// 
//    @Override
//    public Collection<? extends GrantedAuthority> getAuthorities() {
//        return null;
//    }
// 
//    @Override
//    public String getPassword() {
//        return user.getPassword();
//    }
// 
//    @Override
//    public String getUsername() {
//        return user.getEmail();
//    }
// 
//    @Override
//    public boolean isAccountNonExpired() {
//        return true;
//    }
// 
//    @Override
//    public boolean isAccountNonLocked() {
//        return true;
//    }
// 
//    @Override
//    public boolean isCredentialsNonExpired() {
//        return true;
//    }
// 
//    @Override
//    public boolean isEnabled() {
//        return true;
//    }
//     
//    public String getName() {
//        return user.getName();
//    }
//}
