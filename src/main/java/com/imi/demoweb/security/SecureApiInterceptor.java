package com.imi.demoweb.security;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class SecureApiInterceptor extends HandlerInterceptorAdapter {

	private static final Logger log = LoggerFactory.getLogger(SecureApiInterceptor.class);

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		log.info("authorizing secure api request");
		if (request.getMethod().equals(HttpMethod.OPTIONS.name()))
			return true;
		if (request.getHeader("Authorization") == null || !request.getHeader("Authorization").equals("imisecret")) {
			response.setStatus(HttpServletResponse.SC_FORBIDDEN);
			response.getWriter().write("You don't seem to have enough permissions to access this resource");
			return false;
		}
		return true;
	}
}
